/**
 * Generated Tool: blocksTool_0781
 * Domain: Blocks
 * ID: 0781
 */
exports.blocksTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0781:', error);
    throw error;
  }
};
