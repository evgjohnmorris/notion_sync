/**
 * Generated Tool: blocksTool_0664
 * Domain: Blocks
 * ID: 0664
 */
exports.blocksTool_0664 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0664:', error);
    throw error;
  }
};
