/**
 * Generated Tool: blocksTool_0364
 * Domain: Blocks
 * ID: 0364
 */
exports.blocksTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0364:', error);
    throw error;
  }
};
