/**
 * Generated Tool: blocksTool_0533
 * Domain: Blocks
 * ID: 0533
 */
exports.blocksTool_0533 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0533:', error);
    throw error;
  }
};
