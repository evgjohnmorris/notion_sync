/**
 * Generated Tool: blocksTool_0629
 * Domain: Blocks
 * ID: 0629
 */
exports.blocksTool_0629 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0629:', error);
    throw error;
  }
};
