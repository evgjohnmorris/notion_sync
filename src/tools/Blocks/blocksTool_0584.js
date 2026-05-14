/**
 * Generated Tool: blocksTool_0584
 * Domain: Blocks
 * ID: 0584
 */
exports.blocksTool_0584 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0584:', error);
    throw error;
  }
};
