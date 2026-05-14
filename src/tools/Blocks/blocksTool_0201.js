/**
 * Generated Tool: blocksTool_0201
 * Domain: Blocks
 * ID: 0201
 */
exports.blocksTool_0201 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0201:', error);
    throw error;
  }
};
