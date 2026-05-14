/**
 * Generated Tool: blocksTool_0866
 * Domain: Blocks
 * ID: 0866
 */
exports.blocksTool_0866 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0866:', error);
    throw error;
  }
};
