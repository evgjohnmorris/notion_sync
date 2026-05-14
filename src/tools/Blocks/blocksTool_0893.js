/**
 * Generated Tool: blocksTool_0893
 * Domain: Blocks
 * ID: 0893
 */
exports.blocksTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0893:', error);
    throw error;
  }
};
