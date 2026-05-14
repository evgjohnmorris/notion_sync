/**
 * Generated Tool: blocksTool_0809
 * Domain: Blocks
 * ID: 0809
 */
exports.blocksTool_0809 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0809:', error);
    throw error;
  }
};
