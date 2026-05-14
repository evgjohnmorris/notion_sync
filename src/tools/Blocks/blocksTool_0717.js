/**
 * Generated Tool: blocksTool_0717
 * Domain: Blocks
 * ID: 0717
 */
exports.blocksTool_0717 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0717:', error);
    throw error;
  }
};
