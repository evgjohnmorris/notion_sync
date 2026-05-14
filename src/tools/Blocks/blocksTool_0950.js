/**
 * Generated Tool: blocksTool_0950
 * Domain: Blocks
 * ID: 0950
 */
exports.blocksTool_0950 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0950:', error);
    throw error;
  }
};
