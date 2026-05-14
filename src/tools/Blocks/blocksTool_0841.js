/**
 * Generated Tool: blocksTool_0841
 * Domain: Blocks
 * ID: 0841
 */
exports.blocksTool_0841 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0841:', error);
    throw error;
  }
};
