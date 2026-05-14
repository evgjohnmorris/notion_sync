/**
 * Generated Tool: blocksTool_0898
 * Domain: Blocks
 * ID: 0898
 */
exports.blocksTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0898:', error);
    throw error;
  }
};
