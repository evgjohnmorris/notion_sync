/**
 * Generated Tool: blocksTool_0733
 * Domain: Blocks
 * ID: 0733
 */
exports.blocksTool_0733 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0733:', error);
    throw error;
  }
};
