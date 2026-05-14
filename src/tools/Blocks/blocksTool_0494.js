/**
 * Generated Tool: blocksTool_0494
 * Domain: Blocks
 * ID: 0494
 */
exports.blocksTool_0494 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0494:', error);
    throw error;
  }
};
