/**
 * Generated Tool: blocksTool_0160
 * Domain: Blocks
 * ID: 0160
 */
exports.blocksTool_0160 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0160:', error);
    throw error;
  }
};
