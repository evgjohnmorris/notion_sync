/**
 * Generated Tool: blocksTool_0703
 * Domain: Blocks
 * ID: 0703
 */
exports.blocksTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0703:', error);
    throw error;
  }
};
