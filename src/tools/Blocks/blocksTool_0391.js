/**
 * Generated Tool: blocksTool_0391
 * Domain: Blocks
 * ID: 0391
 */
exports.blocksTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0391:', error);
    throw error;
  }
};
