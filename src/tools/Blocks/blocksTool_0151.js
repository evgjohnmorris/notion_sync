/**
 * Generated Tool: blocksTool_0151
 * Domain: Blocks
 * ID: 0151
 */
exports.blocksTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0151:', error);
    throw error;
  }
};
