/**
 * Generated Tool: blocksTool_0585
 * Domain: Blocks
 * ID: 0585
 */
exports.blocksTool_0585 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0585:', error);
    throw error;
  }
};
