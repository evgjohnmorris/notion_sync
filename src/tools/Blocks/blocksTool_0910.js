/**
 * Generated Tool: blocksTool_0910
 * Domain: Blocks
 * ID: 0910
 */
exports.blocksTool_0910 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0910:', error);
    throw error;
  }
};
