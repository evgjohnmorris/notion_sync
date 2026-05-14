/**
 * Generated Tool: blocksTool_0050
 * Domain: Blocks
 * ID: 0050
 */
exports.blocksTool_0050 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0050:', error);
    throw error;
  }
};
