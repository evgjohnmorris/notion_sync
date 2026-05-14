/**
 * Generated Tool: blocksTool_0184
 * Domain: Blocks
 * ID: 0184
 */
exports.blocksTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0184:', error);
    throw error;
  }
};
