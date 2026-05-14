/**
 * Generated Tool: blocksTool_0821
 * Domain: Blocks
 * ID: 0821
 */
exports.blocksTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0821:', error);
    throw error;
  }
};
