/**
 * Generated Tool: blocksTool_0287
 * Domain: Blocks
 * ID: 0287
 */
exports.blocksTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0287:', error);
    throw error;
  }
};
