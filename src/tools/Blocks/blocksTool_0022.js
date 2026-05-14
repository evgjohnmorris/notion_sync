/**
 * Generated Tool: blocksTool_0022
 * Domain: Blocks
 * ID: 0022
 */
exports.blocksTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0022:', error);
    throw error;
  }
};
