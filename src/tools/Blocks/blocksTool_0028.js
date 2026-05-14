/**
 * Generated Tool: blocksTool_0028
 * Domain: Blocks
 * ID: 0028
 */
exports.blocksTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0028:', error);
    throw error;
  }
};
