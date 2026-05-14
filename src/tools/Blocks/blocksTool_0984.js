/**
 * Generated Tool: blocksTool_0984
 * Domain: Blocks
 * ID: 0984
 */
exports.blocksTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0984:', error);
    throw error;
  }
};
