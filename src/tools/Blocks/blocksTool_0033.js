/**
 * Generated Tool: blocksTool_0033
 * Domain: Blocks
 * ID: 0033
 */
exports.blocksTool_0033 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0033:', error);
    throw error;
  }
};
