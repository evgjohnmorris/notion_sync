/**
 * Generated Tool: blocksTool_0147
 * Domain: Blocks
 * ID: 0147
 */
exports.blocksTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0147:', error);
    throw error;
  }
};
