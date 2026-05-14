/**
 * Generated Tool: blocksTool_0433
 * Domain: Blocks
 * ID: 0433
 */
exports.blocksTool_0433 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0433:', error);
    throw error;
  }
};
