/**
 * Generated Tool: databasesTool_0833
 * Domain: Databases
 * ID: 0833
 */
exports.databasesTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0833:', error);
    throw error;
  }
};
