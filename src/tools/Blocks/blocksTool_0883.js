/**
 * Generated Tool: blocksTool_0883
 * Domain: Blocks
 * ID: 0883
 */
exports.blocksTool_0883 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0883:', error);
    throw error;
  }
};
