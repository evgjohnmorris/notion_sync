/**
 * Generated Tool: blocksTool_0596
 * Domain: Blocks
 * ID: 0596
 */
exports.blocksTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0596:', error);
    throw error;
  }
};
