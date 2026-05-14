/**
 * Generated Tool: blocksTool_0731
 * Domain: Blocks
 * ID: 0731
 */
exports.blocksTool_0731 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0731:', error);
    throw error;
  }
};
