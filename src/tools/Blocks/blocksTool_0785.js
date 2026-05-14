/**
 * Generated Tool: blocksTool_0785
 * Domain: Blocks
 * ID: 0785
 */
exports.blocksTool_0785 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0785:', error);
    throw error;
  }
};
