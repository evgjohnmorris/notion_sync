/**
 * Generated Tool: blocksTool_0350
 * Domain: Blocks
 * ID: 0350
 */
exports.blocksTool_0350 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0350:', error);
    throw error;
  }
};
