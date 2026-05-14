/**
 * Generated Tool: blocksTool_0412
 * Domain: Blocks
 * ID: 0412
 */
exports.blocksTool_0412 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0412:', error);
    throw error;
  }
};
