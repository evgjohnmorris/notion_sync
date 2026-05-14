/**
 * Generated Tool: blocksTool_0301
 * Domain: Blocks
 * ID: 0301
 */
exports.blocksTool_0301 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0301:', error);
    throw error;
  }
};
