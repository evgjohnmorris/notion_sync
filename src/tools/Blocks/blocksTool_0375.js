/**
 * Generated Tool: blocksTool_0375
 * Domain: Blocks
 * ID: 0375
 */
exports.blocksTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0375:', error);
    throw error;
  }
};
