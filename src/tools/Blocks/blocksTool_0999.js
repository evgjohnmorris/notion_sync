/**
 * Generated Tool: blocksTool_0999
 * Domain: Blocks
 * ID: 0999
 */
exports.blocksTool_0999 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0999:', error);
    throw error;
  }
};
