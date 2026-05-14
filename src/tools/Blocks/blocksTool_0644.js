/**
 * Generated Tool: blocksTool_0644
 * Domain: Blocks
 * ID: 0644
 */
exports.blocksTool_0644 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0644:', error);
    throw error;
  }
};
