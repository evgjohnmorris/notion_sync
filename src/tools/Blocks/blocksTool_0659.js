/**
 * Generated Tool: blocksTool_0659
 * Domain: Blocks
 * ID: 0659
 */
exports.blocksTool_0659 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0659:', error);
    throw error;
  }
};
