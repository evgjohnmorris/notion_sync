/**
 * Generated Tool: blocksTool_0203
 * Domain: Blocks
 * ID: 0203
 */
exports.blocksTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0203:', error);
    throw error;
  }
};
