/**
 * Generated Tool: blocksTool_0182
 * Domain: Blocks
 * ID: 0182
 */
exports.blocksTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0182:', error);
    throw error;
  }
};
