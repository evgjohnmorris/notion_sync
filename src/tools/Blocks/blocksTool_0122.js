/**
 * Generated Tool: blocksTool_0122
 * Domain: Blocks
 * ID: 0122
 */
exports.blocksTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0122:', error);
    throw error;
  }
};
