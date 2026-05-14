/**
 * Generated Tool: blocksTool_0995
 * Domain: Blocks
 * ID: 0995
 */
exports.blocksTool_0995 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0995:', error);
    throw error;
  }
};
