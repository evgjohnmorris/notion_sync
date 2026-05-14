/**
 * Generated Tool: blocksTool_0532
 * Domain: Blocks
 * ID: 0532
 */
exports.blocksTool_0532 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0532:', error);
    throw error;
  }
};
