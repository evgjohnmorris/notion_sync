/**
 * Generated Tool: blocksTool_0978
 * Domain: Blocks
 * ID: 0978
 */
exports.blocksTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0978:', error);
    throw error;
  }
};
