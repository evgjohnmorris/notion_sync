/**
 * Generated Tool: blocksTool_0253
 * Domain: Blocks
 * ID: 0253
 */
exports.blocksTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0253:', error);
    throw error;
  }
};
