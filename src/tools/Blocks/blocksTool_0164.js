/**
 * Generated Tool: blocksTool_0164
 * Domain: Blocks
 * ID: 0164
 */
exports.blocksTool_0164 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0164:', error);
    throw error;
  }
};
