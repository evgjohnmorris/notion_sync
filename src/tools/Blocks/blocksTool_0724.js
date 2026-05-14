/**
 * Generated Tool: blocksTool_0724
 * Domain: Blocks
 * ID: 0724
 */
exports.blocksTool_0724 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0724:', error);
    throw error;
  }
};
