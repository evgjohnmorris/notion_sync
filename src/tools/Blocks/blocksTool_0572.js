/**
 * Generated Tool: blocksTool_0572
 * Domain: Blocks
 * ID: 0572
 */
exports.blocksTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0572:', error);
    throw error;
  }
};
